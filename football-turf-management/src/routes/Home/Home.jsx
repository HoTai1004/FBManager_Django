import React from "react";
import "./Home.scss";
import "boxicons";
import { useContext } from "react";
import { SelectRoleModal } from "../../Components/Modals/SelectRoleModal/SelectRoleModal";
import { ModalServiceContext } from "../../Components/Modal/ModalService";
import { Layout } from "../../Components/Layout/Layout";

export const Home = () => {

  const { openModal } = useContext(ModalServiceContext);

  return (
    <Layout>
      <section className="home-container" id="home">
        <div className="home-text">
          <h1>
            Find Your Next Perfect
            <br />
            Football Turf To Play <br /> With Your Friends.
          </h1>

          <button
            className="btn"
            onClick={() => openModal({
              title: "",
              width: "350px",
              content: ({ close }) => <SelectRoleModal close={close} />,
            })}
          >
            Sign up
          </button>
        </div>
      </section>
    </Layout>
  );
};
