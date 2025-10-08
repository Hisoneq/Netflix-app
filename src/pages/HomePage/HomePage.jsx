import { useMemo } from "react"
import { useTranslation } from "react-i18next"

import Header from "../../Components/Header/Header"
import Title from "../../Components/Title/Title"
import MovieSlider from "../../Components/MovieSlider/MovieSlider"
import ReasonsCardSet from "../../Components/ReasonsCardSet/ReasonsCardSet"
import Footer from "../../Components/Footer/Footer"
import MembershipForm from "../../Components/MembershipForm/MembershipForm"
import FAQGroup from "../../Components/FAQGroup/FAQGroup"

import TrumanShow from "../../assets/images/TrumanShow.webp"        
import Inception from "../../assets/images/Inception.jpg"          
import TheDarkKnight from "../../assets/images/TheDarkKnight.jpg"   
import Interstellar from "../../assets/images/Interstellar.jpg"     
import PulpFiction from "../../assets/images/PulpFiction.jpg"      
import TheMatrix from "../../assets/images/TheMatrix.png"          
import ForrestGump from "../../assets/images/ForrestGump.jpg"       
import TheShawshankRedemption from "../../assets/images/TheShawshankRedemption.jpg" 
import Goodfellas from "../../assets/images/Goodfellas.jpg"         
import TheGodfather from "../../assets/images/TheGodfather.jpg"    

import Dekstop from "../../assets/images/Dekstop.png"
import Download from "../../assets/images/Download.png"
import Telescope from "../../assets/images/Telescope.webp"
import HappyBox from "../../assets/images/HappyBox.png"

export default function HomePage() {
  const { t } = useTranslation();

  const movies = useMemo(() => [
    { id: 1, image: TrumanShow, rating: 9.9, title: t('movies.trumanShow') },
    { id: 2, image: Inception, rating: 8.5, title: t('movies.inception') },
    { id: 3, image: TheDarkKnight, rating: 9.2, title: t('movies.darkKnight') },
    { id: 4, image: Interstellar, rating: 8.8, title: t('movies.interstellar') },
    { id: 5, image: PulpFiction, rating: 9.1, title: t('movies.pulpFiction') },
    { id: 6, image: TheMatrix, rating: 8.7, title: t('movies.matrix') },
    { id: 7, image: ForrestGump, rating: 9.0, title: t('movies.forrestGump') },
    { id: 8, image: TheShawshankRedemption, rating: 8.9, title: t('movies.shawshank') },
    { id: 9, image: Goodfellas, rating: 8.6, title: t('movies.goodfellas') },
    { id: 10, image: TheGodfather, rating: 9.3, title: t('movies.godfather') }
  ], [t]);

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

