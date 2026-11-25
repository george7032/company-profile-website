import zebnexLogo from "../assets/zebnex-logo.png.asset.json";
import tenantManager from "../assets/tenant-manager.jpg.asset.json";
import ticketpointLive from "../assets/ticketpoint-live.jpg.asset.json";
import schooldeskStatement from "../assets/schooldesk-statement.jpg.asset.json";
import safarideskFleet from "../assets/safaridesk-fleet.jpg.asset.json";
import lancasterSecurity from "../assets/lancaster-security.png.asset.json";
import benedictaAcademy from "../assets/benedicta-academy.png.asset.json";
import gokyleSafaris from "../assets/gokyle-safaris.png.asset.json";
import kridonellySafaris from "../assets/kridonelly-safaris.png.asset.json";
import khl from "../assets/khl.png.asset.json";

export const profileAssets = {
  logo: zebnexLogo,
  tenantManager,
  ticketpointLive,
  schooldeskStatement,
  safarideskFleet,
  clients: [
    { name: "Lancaster Security Limited", image: lancasterSecurity },
    { name: "E. Benedicta Academy", image: benedictaAcademy },
    { name: "Gokyle Tours & Safaris", image: gokyleSafaris },
    { name: "Kridonelly Safaris", image: kridonellySafaris },
    { name: "KHL", image: khl },
  ],
};