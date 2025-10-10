import { useMemo } from "react"
import { useTranslation } from "react-i18next"
// import { useAuth } from "../../hooks/use-auth"

import Header from "../../Components/Header/Header"
import Title from "../../Components/Title/Title"
import MovieSlider from "../../Components/MovieSlider/MovieSlider"
import ReasonsCardSet from "../../Components/ReasonsCardSet/ReasonsCardSet"
import Footer from "../../Components/Footer/Footer"
import MembershipForm from "../../Components/MembershipForm/MembershipForm"
import FAQGroup from "../../Components/FAQGroup/FAQGroup"

import { MOVIES_DATA } from "../../data/movies"
import { REASONS_DATA } from "../../data/reasons"
import { FAQS_DATA } from "../../data/faqs"

export default function HomePage() {
  const { t } = useTranslation();

  const movies = useMemo(() => MOVIES_DATA, []);

  const reasonsCards = useMemo(() => 
    REASONS_DATA.map(reason => ({
      title: t(reason.titleKey),
      description: t(reason.descriptionKey),
      image: reason.image
    }))
  , [t]);

  const FAQs = useMemo(() => 
    FAQS_DATA.map(faq => ({
      title: t(faq.titleKey),
      description: t(faq.descriptionKey)
    }))
  , [t]);

  // const { isAuth, email } = useAuth();

  return (
    <>
      <Header />
      <Title title={t('titles.trendingNow')} />
      <MovieSlider movies={movies} />
      <Title title={t('titles.moreReasons')} />
      <ReasonsCardSet reasonsCards={reasonsCards} />
      <FAQGroup faqs={FAQs} />
      <MembershipForm />
      <Footer />
    </>
  );
}

