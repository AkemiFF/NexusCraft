import type { GetServerSideProps, InferGetStaticPropsType } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Head from 'next/head'
import Footer from './components/footer'
import HomePage from './components/home'
import MatrixRain from './components/matrix-rain'
import Navigation from './components/navigation'



type Props = {
  // Add custom props here
}

const Homepage = (
  _props: InferGetStaticPropsType<typeof getServerSideProps>
) => {
  // const router = useRouter()
  // const { t, i18n } = useTranslation('common')
  // const toggleLanguage = () => {
  //   const newLocale = i18n.resolvedLanguage === 'en' ? 'fr' : 'en'
  //   i18n.changeLanguage(newLocale)
  //   router.push(router.pathname, router.asPath, { locale: newLocale })
  // }

  return (
    <>
      <Head>
        <title>NexusCraft</title>
        <meta name="description" content="NexusCraft" />
      </Head>
      <div className="min-h-screen bg-black text-white overflow-hidden relative">
        <MatrixRain />
        <div className="relative z-10">
          <Navigation />
          <HomePage />
          <Footer />
        </div>
      </div>
    </>
  )
}

// or getServerSideProps: GetServerSideProps<Props> = async ({ locale })
export const getServerSideProps: GetServerSideProps<Props> = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common',
    ])),
  },
})

export default Homepage
