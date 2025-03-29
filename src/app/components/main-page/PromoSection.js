export function PromoSection() {
  return (
    <div className="flex flex-wrap justify-center gap-5">
      {Array.from({ length: Math.ceil(44 / 3) }).map((_, index) => {
        const firstImage = index * 3 + 1;
        const secondImage = index * 3 + 2;
        const thirdImage = index * 3 + 3;

        return (
          <section
            key={index}
            className="grid grid-cols-3 grid-flow-col gap-5 h-[70vh] w-[60vw] my-5 
                       max-md:w-[80vw] max-sm:grid-cols-2 max-sm:grid-flow-row max-sm:gap-2 max-sm:h-[50vh]"
          >
            {/* Primera imagen o video si es la posición 25 */}
            <div className="row-span-2 col-span-2 max-sm:col-span-2 w-full h-full overflow-hidden">
              {firstImage === 25 ? (
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                >
                  <source src="/25.mp4" type="video/mp4" />
                  Tu navegador no soporta videos.
                </video>
              ) : (
                <div
                  className="bg-cover bg-center bg-no-repeat w-full h-full"
                  style={{ backgroundImage: `url(/${firstImage}.jpg)` }}
                ></div>
              )}
            </div>

            {/* Segunda imagen (si no supera 44) */}
            {secondImage <= 44 && (
              <div
                className="col-span-3 max-sm:col-span-1 bg-cover bg-center bg-no-repeat w-full h-full"
                style={{ backgroundImage: `url(/${secondImage}.jpg)` }}
              ></div>
            )}

            {/* Tercera imagen (si no supera 44) */}
            {thirdImage <= 44 && (
              <div
                className="col-span-3 max-sm:col-span-1 bg-cover bg-center bg-no-repeat w-full h-full"
                style={{ backgroundImage: `url(/${thirdImage}.jpg)` }}
              ></div>
            )}
          </section>
        );
      })}

      {/* Google Maps */}
      <div className="w-full flex justify-center my-10">
        <iframe
          title="Google Maps"
          className="w-[80vw] h-[50vh] max-sm:w-full"
          src="https://www.google.com/maps/embed?pb=!4v1711567890123!6m8!1m7!1sD-qSXExKi5haEojk9Y2__A!2m2!1d4.7944166!2d-75.6920152!3f300.1!5f00!5f-50.7820865974627469"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}