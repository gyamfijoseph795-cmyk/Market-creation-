export default function SellCamerasAccessoriesPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-6 py-12">
      <div className="mx-auto max-w-5xl">

        <p className="text-sm font-semibold text-blue-600">
          YOUR MARKET
        </p>

        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">
          Cameras & Accessories
        </h1>

        <p className="text-gray-600 mb-10">
          Select the type of camera or photography product you want to sell.
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {[
            "Digital Cameras",
            "DSLR & Mirrorless Cameras",
            "Camera Lenses",
            "Tripods & Camera Stands",
            "Lighting & Photography Equipment",
            "Other Camera Accessories",
          ].map((item) => (
            <div
              key={item}
              className="rounded-xl bg-white p-6 border border-gray-200"
            >
              <h2 className="text-xl font-bold text-gray-900">
                {item}
              </h2>
            </div>
          ))}

        </div>

      </div>
    </main>
  );
}