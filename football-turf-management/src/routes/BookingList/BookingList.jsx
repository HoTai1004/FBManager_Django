import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "../../Components/Layout/Layout";
import { authApi } from "../../api/mock-api";
import './BookingList.scss';

const OwnerBookingList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await authApi.getBookedSubTurf();
      setData(data);
    }
    getData();
  }, []);

  return (
    <Layout>
      <div className="booking-turf">
        <div className="title">
          <h1>Renter Booking Your Turf</h1>
          <p>Manage your user booking list as well as your balance.</p>
        </div>

        {/* Number of subTurfs renters book in a big turf */}
        <div className="booking-list">
          {/* {!turf
              ? "Loading..."
              : turf.subTurfs.map((t) => {
                  return <SubTurfCard key={t.id} turfId={t.id} subTurf={t} />;
                })} */}
        </div>
      </div>
    </Layout>
  );
}

const RenterBookingList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      const data = await authApi.getBookedSubTurf();
      setData(data);
    }
    getData();
  }, []);

  return (
    <Layout>
      <div className="booking-turf">
        <div className="title">
          <h1>Your Booking Turf</h1>
          <p>You can book more sub-turf to play or remove them.</p>
        </div>

        {/* Number of small turfs in a big turf */}
        <div className="booking-list">
          {/* {!turf
              ? "Loading..."
              : turf.subTurfs.map((t) => {
                  return <SubTurfCard key={t.id} turfId={t.id} subTurf={t} />;
                })} */}
        </div>
      </div>
    </Layout>
  );
}

export const BookingList = () => {

  const [searchParams] = useSearchParams();

  if (searchParams.get("role") === "owner") {
    return <OwnerBookingList />
  }

  if (searchParams.get("role") === "renter") {
    return <RenterBookingList />
  }

  return null;
};