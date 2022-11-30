import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { authApi } from "../../api/mock-api";
import { Layout } from "../../Components/Layout/Layout";
import { SearchTurf } from "../../Components/SearchTurf/SearchTurf";
import "./TurfList.scss";
import { TurfCard } from "./TurfCard/TurfCard";

export const TurfList = () => {
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
