const AboutBuilding = () => {
    return (
        <section className="max-w-7xl mx-auto min-h-screen flex justify-between text-secondary  gap-10">
            <div className="w-1/2 h-[500px] relative ">
                <img
                    src="/images/Gedung2.jpg"
                    alt="Gedung Aula Serbaguna BPSDM Pontianak"
                    className=" bg-cover w-[500px] rounded-md  "
                />
                <img
                    src="/images/Gedung1.jpg"
                    alt="Gedung Aula Serbaguna BPSDM Pontianak"
                    className=" bg-cover w-[400px] absolute bottom-3 right-3 p-2 bg-white rounded-md"
                />
            </div>
            <div className="w-full lg:w-1/2">
                <h2 className="font-bold text-accent text-xl">
                    Tentang Gedung
                </h2>
                <h1 className="text-4xl font-bold mt-5">
                    Gedung Aula Serbaguna{" "}
                    <span className="text-accent">BPSDM Pontianak</span>
                </h1>
                <div className="mt-10 flex flex-col gap-8 max-w-md">
                    {/* Item 1 */}
                    <div className="flex items-start space-x-12 ">
                        <h1 className="text-4xl font-bold text-accent ">01.</h1>
                        <div>
                            <h2 className="text-xl font-semibold">
                                Lokasi Gedung
                            </h2>
                            <p className="mt-2 text-customGray">
                                Fasilitas Gedung Berada Di Tempat Yang Strategis
                            </p>
                        </div>
                    </div>
                    {/* Item 2 */}
                    <div className="flex items-start space-x-10">
                        <h1 className="text-4xl font-bold text-accent">02.</h1>
                        <div>
                            <h2 className="text-xl font-semibold">
                                Fasilitas Gedung
                            </h2>
                            <p className="mt-2 text-customGray">
                                Fasilitas Yang Terdapat Dalamnya Berupa Paket
                                Dekorasi, Sound Sistem, dan Juga Catering
                            </p>
                        </div>
                    </div>
                    {/* Item 3 */}
                    <div className="flex items-start space-x-10">
                        <h1 className="text-4xl font-bold text-accent">03.</h1>
                        <div>
                            <h2 className="text-xl font-semibold">
                                Kapasitas Gedung
                            </h2>
                            <p className="mt-2 text-customGray">
                                Kapasitas Gedung Dapat Menampung Kurang Lebih
                                200 orang
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutBuilding;
