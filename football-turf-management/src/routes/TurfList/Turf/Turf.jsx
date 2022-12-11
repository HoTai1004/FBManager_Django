import React, { useState, useEffect, useContext } from "react";
import { Layout } from "../../../Components/Layout/Layout";
import { UserContext } from "../../../contexts/userContext";
import { SelectTimeAndInfoManagement } from "../../../Components/SelectTimeAndInfoManagement/SelectTimeAndInfoManagement";
import { authApi } from "../../../api/mock-api";
import { SubTurfCard } from "../SubTurfCard/SubTurfCard";
import { useParams } from "react-router-dom";
import "./Turf.scss";

const TurfOwner = () => {
  const { turfId } = useParams();

  const [turf, setTurf] = useState();

  useEffect(() => {
    const getTurf = async () => {
      const turf = await authApi.getTurf(turfId);
      setTurf(turf);
    };
    getTurf();
  }, [turfId]);

  return (
    <Layout>
      <div className="turf-64d">
        <div className="title">
          <h1>Available Turfs For Rent </h1>
          <p>
            Add your sub-turf to manage as well as for rent.
          </p>
        </div>

        {/* Select Time And Info Management */}
        <SelectTimeAndInfoManagement />

        {/* Number of small turfs in a big turf */}
        <div className="list-w567">
          {!turf
            ? "Loading..."
            : turf.subTurfs.map((t) => {
              return (
                <SubTurfCard
                  key={t.id}
                  subTurf={t}
                  turfId={t.id}
                />
              );
            })}
        </div>
      </div>
    </Layout>
  );
};

export const TurfRenter = () => {
  const { turfId } = useParams();

  const [turf, setTurf] = useState();

  useEffect(() => {
    const getTurf = async () => {
      const turf = await authApi.getTurf(turfId);
      setTurf(turf);
    };
    getTurf();
  }, [turfId]);

  return (
    <Layout>
      <div className="turf-64d">
        <div className="title">
          <h1>Available Turfs For Rent </h1>
          <p>
            Select time and click on the available turf to book for happy and
            pleasure matches.
          </p>
        </div>

        {/* Select Time And Info Management */}
        <SelectTimeAndInfoManagement />

        {/* Number of small turfs in a big turf */}
        <div className="list-w567">
          {!turf
            ? "Loading..."
            : turf.subTurfs.map((t) => {
              return (
                <SubTurfCard
                  key={t.id}
                  subTurf={t}
                  turfId={t.id}
                />
              );
            })
          }
        </div>
      </div>
    </Layout>
  );
};

export const Turf = () => {
  const { user } = useContext(UserContext);

  if (user.role === "owner") {
    return <TurfOwner />;
  }

  if (user.role === "renter") {
    return <TurfRenter />;
  }

  return null;
};