import { Value } from "../UI/organisms/Value";
import { ServiceList } from "../UI/molecules/ServiceList";
import { Countries } from "../UI/molecules/CountryList";
import { Testimony } from "../UI/molecules/Testimony";
import { Client } from "../UI/molecules/Client";
import { Reviews } from "../UI/molecules/Reviews";
import { Translate } from "../UI/molecules/Translate";
export const Home = () => {
  return (
    <div className="homeContainer">
      <Translate />
      <Value />
      <ServiceList />
      <Countries />
      <Testimony />
      <Client />
      <Reviews />
    </div>
  );
};
