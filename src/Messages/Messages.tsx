import { headerSpanish } from "./es/template/header";
import { headerEnglish } from "./en/template/header";
import { valueProposalExperienceEs } from "./es/template/value-proposal-experience";
import { servicesEs } from "./es/template/services";
import { containerCountryEs } from "./es/template/container-countries";
import { reviewsEs } from "./es/template/reviews";
import { valueProposalExperience } from "./en/template/value-proposal-experience";
import { services } from "./en/template/services";
import { containerCountry } from "./en/template/container-countries";
import { reviews } from "./en/template/reviews";
import { paragraphReviews } from "./en/template/review-paragraph";
import { paragraphReviewsEs } from "./es/template/paragraph-reviews";
import { contactUs } from "./en/template/contactUs";
import { contactUsEs } from "./es/template/contactUs";
import { footerSpanish } from "./es/template/footer";
import { footerEnglish } from "./en/template/footer";
import { PolicyDataEs } from "./es/template/PolicyData";
import { PolicyData } from "./en/template/PolicyData";

export const allmessages = {
  es: {
    ...headerSpanish,
    ...valueProposalExperienceEs,
    ...servicesEs,
    ...containerCountryEs,
    ...reviewsEs,
    ...paragraphReviewsEs,
    ...contactUsEs,
    ...footerSpanish,
    ...PolicyDataEs,
  },
  en: {
    ...headerEnglish,
    ...valueProposalExperience,
    ...services,
    ...containerCountry,
    ...reviews,
    ...paragraphReviews,
    ...contactUs,
    ...footerEnglish,
    ...PolicyData,
  },
};
