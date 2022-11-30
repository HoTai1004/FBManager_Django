import React, { useState, useEffect } from "react";
import { Layout } from "../../../Components/Layout/Layout";
import { SelectTimeAndInfoManagement } from "../../../Components/SelectTimeAndInfoManagement/SelectTimeAndInfoManagement";
import { authApi } from "../../../api/mock-api";
import "./Turf.scss";
import { SubTurfCard } from "../SubTurfCard/SubTurfCard";
import { useParams } from "react-router-dom";

export const Turf = () => {
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
              return <SubTurfCard key={t.id} subTurf={t} />;
            })}
      </div>
    </Layout>
  );
};
