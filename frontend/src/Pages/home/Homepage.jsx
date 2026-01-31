import Navbar from "../../Components/layouts/Navbar"
import Footer from "../../Components/layouts/Footer"
import HeroSection from "./HeroSection"
import Features from "./Features"

export default function HomePage() {
    return (
        <>
        <Navbar/>
        <div className="pt-16 min-h-screen bg-gradient-to-br from-neutral-900 via-stone-800 to-zinc-900">
            <HeroSection/>
            <Features/>
        </div>
        <Footer/>
        </>
    )
}