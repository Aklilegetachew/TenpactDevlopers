export function VideoBackground() {
  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="object-cover w-full h-full"
      >
        <source src="/tenpactdev.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/30" />{" "}
      {/* Overlay for better text visibility */}
    </div>
  );
}
