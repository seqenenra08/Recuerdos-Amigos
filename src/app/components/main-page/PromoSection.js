export function PromoSection() {
  const totalFiles = 122; // total de archivos
  const videoFiles = [25, 53, 56, 74, 75, 76, 83, 88, 90, 95, 99, 105]; // aquí pones los números que son mp4
  const files = Array.from({ length: totalFiles }, (_, i) => i + 1);

  return (
    <div className="flex flex-wrap justify-center gap-5">
      {files.map((num) => (
        <div
          key={num}
          className="w-[30vw] h-[60vh] max-sm:w-[45vw] max-sm:h-[30vh] overflow-hidden"
        >
          {videoFiles.includes(num) ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              controls
            >
              <source src={`/${num}.mp4`} type="video/mp4" />
              Tu navegador no soporta videos.
            </video>
          ) : (
            <img
              src={`/${num}.jpg`}
              alt={`Promo ${num}`}
              className="w-full h-full object-contain"
            />
          )}
        </div>
      ))}

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
