import Check from "assets/svgs/check.svg";
import MailList from "assets/images/movie-list.png";

const ServiceData = [
  {
    title: "Get the movie download link right in your mail.",
    description: `
  From the moment you sign up, you'll get a link to download the
  latest movie right in your inbox curated from your chosen
  category. Yes, it is that simple.
  `,
    listings: [
      {
        text: "Latest movies.",
        svg: Check,
        alt: "Check",
      },
      {
        text: "High quality movies.",
        svg: Check,
        alt: "Check",
      },
      {
        text: "Instant downloads.",
        svg: Check,
        alt: "Check",
      },
      {
        text: "No spamming or Ads.",
        svg: Check,
        alt: "Check",
      },
    ],
    image: MailList,
    alt: "Mail List",
  },
];

export default ServiceData;
