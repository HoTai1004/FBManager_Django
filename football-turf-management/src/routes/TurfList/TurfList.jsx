import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { authApi } from "../../api/mock-api";
import { UserContext } from "../../contexts/userContext";
import { Layout } from "../../Components/Layout/Layout";
import { SearchTurf } from "../../Components/SearchTurf/SearchTurf";
import { TurfCard } from "./TurfCard/TurfCard";
import "./TurfList.scss";

const TurfListOwner = () => {

  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await authApi.getTurfList();
      setData(data);
    };
    getData();
  }, []);

  return (
    <Layout>
      <div className="turf-list-it4">
        <div className="title">
          <h1>Your Football Turfs</h1>
          <p>
            Add, edit and manage your turfs.
          </p>
        </div>

        {/* Search For Turf list */}
        <SearchTurf />

        {/* Turf list */}
        <div className="list-container">
          <div className="list">
            {!data
              ? "Loading..."
              : data.map((turf, i) => {
                return (
                  <Link to={`${turf.id}`} key={i}>
                    <TurfCard turf={turf} />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const TurfListRenter = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await authApi.getTurfList();
      setData(data);
    };
    getData();
  }, []);

  return (
    <Layout>
      <div className="turf-list-it4">
        <div className="title">
          <h1>Football Turfs For Rent</h1>
          <p>
            Search over 8 football turfs to rent from the list below in the city.
          </p>
        </div>

        {/* Search For Turf list */}
        <SearchTurf />

        {/* Turf list */}
        <div className="list-container">
          <div className="list">
            {!data
              ? "Loading..."
              : data.map((turf, i) => {
                return (
                  <Link to={`${turf.id}`} key={i}>
                    <TurfCard turf={turf} />
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </Layout>
  );
};


export const TurfList = () => {

  const { user } = useContext(UserContext);

  if (user?.role === "owner") {
    return <TurfListOwner />;
  }

  if (user?.role === "renter") {
    return <TurfListRenter />;
  }

  return null;
};