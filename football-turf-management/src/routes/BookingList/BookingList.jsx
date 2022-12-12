import React from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "../../Components/Layout/Layout";
import './BookingList.scss';

const OwnerBookingList = () => {
  return (
    <Layout>
      <div className="booking-turf">
        <div className="title">
          <h1>User Booking Your Turf</h1>
          <p>Manage your user booking list as well as your balance.</p>
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

const UserBookingList = () => {
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

  if (searchParams.get("role") === "user") {
    return <UserBookingList />
  }

  return null;
};