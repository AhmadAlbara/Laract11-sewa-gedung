import LandingLayout from "@/Layouts/LandingLayout";
import { Head } from "@inertiajs/react";
import { Marker, Popup, MapContainer } from "react-leaflet";
import { TileLayer } from "react-leaflet/TileLayer";
import "leaflet/dist/leaflet.css";
const About = () => {
    const position = [-0.04294414445834823, 109.33033565071044];
    return (
        <LandingLayout>
            <Head title="Tentang Kami" />
            <section className="max-w-7xl mx-auto gap-10 flex flex-col lg:flex-row justify-between text-secondary mt-20 ">
                <div className="w-1/2 space-y-6">
                    <h1 className="text-4xl font-bold text-accent">
                        Tentang Kami
                    </h1>
                    <p className="text-lg leading-relaxed">
                        Badan Pengembangan Sumber Daya Manusia Provinsi
                        Kalimantan Barat atau disingkat BPSDM Prov. Kalbar
                        merupakan salah satu Organisasi Perangkat Daerah (OPD)
                        yang dibentuk berdasarkan Peraturan Daerah Nomor 5 Tahun
                        2021 tentang Perubahan kedua atas Peraturan Daerah Nomor
                        8 Tahun 2016 tentang Pembentukan dan Susunan Perangkat
                        Daerah Provinsi Kalimantan Barat.
                    </p>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold text-accent">
                            Visi
                        </h2>
                        <p className="text-lg leading-relaxed">
                            Terwujudnya kesejahteraan masyarakat Kalimantan
                            Barat melalui Percepatan Pembangunan Infras
                        </p>
                    </div>
                    <div className="space-y-7">
                        <h2 className="text-2xl font-semibold text-accent">
                            Misi
                        </h2>
                        <div className="flex items-center space-x-8 ">
                            <h1 className="text-2xl ">01.</h1>
                            <div>
                                <h2 className="text-lg ">
                                    Mewujudkan percepatan pembangunan
                                    infrastruktur
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6 ">
                            <h1 className="text-2xl  ">02.</h1>
                            <div>
                                <h2 className="text-lg ">
                                    Mewujudkan tata kelola pemerintahan
                                    berkualitas dengan prinsip-prinsip Good
                                    Governance
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6 ">
                            <h1 className="text-2xl ">03.</h1>
                            <div>
                                <h2 className="text-lg">
                                    Mewujudkan masyarakat sejahtera
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6 ">
                            <h1 className="text-2xl ">04.</h1>
                            <div>
                                <h2 className="text-lg">
                                    Mewujudkan masyarakat yang tertib
                                </h2>
                            </div>
                        </div>
                        <div className="flex items-center space-x-6 ">
                            <h1 className="text-2xl ">05.</h1>
                            <div>
                                <h2 className="text-lg">
                                    Mewujudkan pembangunan berwawasan lingkung
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2821.2268108105945!2d109.3299973829347!3d-0.042583840382068194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e1d5907f31222ef%3A0x331b0b7b42cf6f71!2sBPSDM%20Provinsi%20Kalimantan%20Barat!5e0!3m2!1sen!2sid!4v1728399885435!5m2!1sen!2sid"
                    width="50%"
                    height="600"
                className="rounded-lg border"
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </section>
        </LandingLayout>
    );
};

export default About;
