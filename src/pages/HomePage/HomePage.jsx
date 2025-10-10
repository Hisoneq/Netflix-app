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

import Dekstop from "../../assets/images/Dekstop.png"
import Download from "../../assets/images/Download.png"
import Telescope from "../../assets/images/Telescope.webp"
import HappyBox from "../../assets/images/HappyBox.png"

export default function HomePage() {
  const { t } = useTranslation();

  const movies = useMemo(() => 
    MOVIES_DATA.map(movie => ({
      ...movie,
      title: t(movie.titleKey)
    }))
  , [t]);

  const reasonsCards = useMemo(() => [
    { title: t('reasons.enjoyOnTV.title'), description: t('reasons.enjoyOnTV.description'), image: Dekstop },
    { title: t('reasons.download.title'), description: t('reasons.download.description'), image: Download },
    { title: t('reasons.watchEverywhere.title'), description: t('reasons.watchEverywhere.description'), image: Telescope },
    { title: t('reasons.kidsProfiles.title'), description: t('reasons.kidsProfiles.description'), image: HappyBox },
  ], [t]);

  const FAQs = useMemo(() => [
    { title: t('faq.whatIsNetflix.title'), description: t('faq.whatIsNetflix.description') },
    { title: t('faq.howMuch.title'), description: t('faq.howMuch.description') },
    { title: t('faq.whereWatch.title'), description: t('faq.whereWatch.description') },
    { title: t('faq.howCancel.title'), description: t('faq.howCancel.description') },
    { title: t('faq.whatWatch.title'), description: t('faq.whatWatch.description') },
    { title: t('faq.goodForKids.title'), description: t('faq.goodForKids.description') },
    { title: t('faq.language.title'), description: t('faq.language.description') },
  ], [t]);

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

