import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { db } from "../firebase";
import "./PlanScreen.css";
import { loadStripe } from "@stripe/stripe-js";

function PlanScreen() {
  const [products, setProducts] = useState([]);
  const user = useSelector(selectUser);

  //useEffect to fetch the plans from database
  useEffect(() => {
    db.collection("products")
      .where("active", "==", true)
      .get()
      .then((querySnapshot) => {
        const producst = {};
        querySnapshot.forEach(async (productDoc) => {
          producst[productDoc.id] = productDoc.data();
          const priceSnap = await productDoc.ref.collection("prices").get();
          priceSnap.docs.forEach((price) => {
            products[productDoc.id].prices = {
              priceId: price.id,
              priceData: price.data(),
            };
          });
        });
        setProducts(producst);
      }); //only active producst
  }, []);

  const loadCheckout = async (priceId) => {
    const docRef = await db
      .collection("customers")
      .doc(user.uid)
      .collection("checkout_sessions")
      .add({
        price: priceId,
        success_url: window.location.origin,
        cancel_url: window.location.origin,
      });

    docRef.onSnapshot(async (snap) => {
      const { error, sessionId } = snap.data();

      if (error) {
        alert(`An error occured: ${error.message}`);
      }

      if (sessionId) {
        const stripe = await loadStripe(
          "pk_test_51M80n6B1EoYZxTACQiw5UHwPlZdtuak2GPw56NuNnv1X2LXVjphWfyhR4CQVWjXMwdu3aQFPHXmlvDFq9hcX91Ky00xll2f2lh"
        ); //do not show this key in real project!
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };

  return (
    <div className="planScreen">
      {
        /* The Object.entries() method returns an array of a given object's own enumerable string-keyed property key-value pairs. That's why we can maping this. */ Object.entries(
          products
        ).map(([productId, productData]) => {
          return (
            <div className="plansScreen__plan" key={productId}>
              <div className="plansScreen__info">
                <h5>{productData.name}</h5>
                <h6>{productData.description}</h6>
              </div>
              <button onClick={() => loadCheckout(productData.prices.priceId)}>
                Subscribe
              </button>
            </div>
          );
        })
      }
    </div>
  );
}

export default PlanScreen;
