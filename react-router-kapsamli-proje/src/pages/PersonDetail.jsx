import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NotFound from "./NotFound";
import spinner from "../img/Spinner-2.gif";

const PersonDetail = () => {
  //   let { state: person } = useLocation();
  //   console.log(person);

  //! navigate ile gonderilen stati'i yakalamak icin useLocation Hook'u kullanilabilir.
  //! Bu durumda veri, state ile geldigi icin yeniden fetch yapilmasina gerek yoktur.
  let navigate = useNavigate();

  //! Linkteki parametreyi almak icin useParams Hook'u kullanilabilir.
  let { id } = useParams();
  console.log({ id });

  const [person, setPerson] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPerson = () => {
      axios(`https://reqres.in/api/users/${id}`)
        .then((res) => setPerson(res.data.data))
        .catch((err) => {
          setError(true);
          console.log(err);
        })
        .finally(() => setLoading(false));
    };
    getPerson();
  }, [id]);

  if (error) {
    return <NotFound />;
  } else if (loading) {
    return (
      <div className="text-center mt-4">
        <img src={spinner} alt="spinner" />
      </div>
    );
  }

  return (
    <div className="container text-center">
      <h3>
        {person?.first_name} {person?.last_name}
      </h3>

      <img src={person?.avatar} alt="" className="rounded" />

      <p>{person?.email}</p>

      <div>
        <button onClick={() => navigate("/")} className="btn btn-success me-2">
          Go Home
        </button>
        <button className="btn btn-warning" onClick={() => navigate(-1)}>
          Go Back
        </button>
      </div>
    </div>
  );
};

export default PersonDetail;
