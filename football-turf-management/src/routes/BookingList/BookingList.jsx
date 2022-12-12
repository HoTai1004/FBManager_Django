import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "../../Components/Layout/Layout";
import { authApi } from "../../api/mock-api";
import { sum } from "../../utils/collections";
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
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>renterID</th>
                <th>turfID</th>
                <th>subTurfID</th>
                <th>start</th>
                <th>end</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {!data ? ("Loading"
              ) : (
                data.map((b, index) => {
                  return (
                    <tr key={index}>
                      <td>{b.id}</td>
                      <td>{b.userId}</td>
                      <td>{b.turfId}</td>
                      <td>{b.subTurfId}</td>
                      <td>{b.start}</td>
                      <td>{b.end}</td>
                      <td>${b.price}</td>
                    </tr>
                  )
                })
              )}
            </tbody>
            {data && (
              <tfoot>
                <tr>
                  <th colSpan={1}>Balance</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colSpan={6}>${sum(data.map((b) => b.price))}</td>
                </tr>
              </tfoot>
            )}

          </table>
        </div>
      </div>
    </Layout>
  );
}
// {sum(data.map((b) => b.price))}
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

        {/* Number of sub turfs in a list */}
        <div className="booking-list">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>turfID</th>
                <th>subTurfID</th>
                <th>start</th>
                <th>end</th>
                <th>price</th>
              </tr>
            </thead>
            <tbody>
              {!data ? ("Loading"
              ) : (
                data.map((b, index) => {
                  return (
                    <tr key={index}>
                      <td>{b.id}</td>
                      <td>{b.turfId}</td>
                      <td>{b.subTurfId}</td>
                      <td>{b.start}</td>
                      <td>{b.end}</td>
                      <td>${b.price}</td>
                    </tr>
                  )
                })
              )}
            </tbody>
            {data && (
              <tfoot>
                <tr>
                  <th colSpan={1}>Balance</th>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td colSpan={6}>${sum(data.map((b) => b.price))}</td>
                </tr>
              </tfoot>
            )}
          </table>
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