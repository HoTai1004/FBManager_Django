import React, { useContext } from "react";
import { BookSubTurfModal } from "../../../Components/Modals/BookSubTurfModal/BookSubTurfModal";
import { EditSubTurfModal } from "../../../Components/Modals/EditSubTurfModal/EditSubTurfModal";
import { UserContext } from "../../../contexts/userContext";
import { ModalServiceContext } from "../../../Components/Modal/ModalService";
import "./SubTurfCard.scss";

export const SubTurfCard = ({ turfId, subTurf }) => {

  const { openModal } = useContext(ModalServiceContext);

  const { user } = useContext(UserContext);

  const { label, imgSrc, price } = subTurf;

  return (
    <div
      className="sub-turf-card-f32"
      onClick={() => openModal({
        title: user.role === "owner" ? "Edit subturf" : "",
        width: "500px",
        content: ({ close }) => user.role === "owner" ? (
          <EditSubTurfModal close={close} />
        ) : (
          <BookSubTurfModal
            close={close}
            turfId={turfId}
            userId={user.id}
            subTurf={subTurf}

          />
        )
      })}
    >
      <div className="status">
        <div className="featured">FEATURED</div>
        <div className="available">AVAILABLE</div>
      </div>

      <div className="image">
        <img src={imgSrc} alt="" />
      </div>

      <div className="info">
        <div className="line1">{label}</div>
        <div className="line2">
          <div className="price">${price}</div>
          <div className="icon">
            <box-icon name="low-vision" color="#2288ff"></box-icon>
          </div>
        </div>
      </div>
    </div>
  );
};
