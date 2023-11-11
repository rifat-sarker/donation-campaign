import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonation } from "../../utility/localStorage";
import CompleteDonation from "../CompleteDonation/CompleteDonation";

const Donation = () => {
  const donations = useLoaderData();
  const [completedDonations, setComletedDonations] = useState([]);
  const [dataLength, setDataLength] = useState(4);

  useEffect(() => {
    const storedDonationIds = getStoredDonation();
    if (donations.length > 0) {
      const donationCompleted = [];
      for (const id of storedDonationIds) {
        const donation = donations.find((donation) => donation.id === id);
        if (donation) {
          donationCompleted.push(donation);
        }
      }
      setComletedDonations(donationCompleted);
    }
  }, []);
  return (
    <div className="mt-28">
      <div className="grid grid-cols-2 gap-6 ">
        {completedDonations.slice(0, dataLength).map((completeDonation) => (
          <CompleteDonation
            key={completeDonation.id}
            completeDonation={completeDonation}
          ></CompleteDonation>
        ))}
      </div>
      <div className={dataLength === completedDonations.length ? "hidden" : ""}>
        <button
          onClick={() => setDataLength(completedDonations.length)}
          className="btn btn-primary flex"
        >
          See All
        </button>
      </div>
    </div>
  );
};

export default Donation;
