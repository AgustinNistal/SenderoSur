async function run() {
  const userId = "75e28ff8-e6e4-4ffb-af41-a4371bf51577";
  const payload = {
    accommodationId: "domo-mar-plata",
    accommodationName: "Domo Atlántico",
    cityName: "Mar del Plata",
    checkIn: "2026-03-17",
    checkOut: "2026-03-18",
    guests: 2,
    totalPrice: 85,
    status: "confirmed"
  };

  const res = await fetch(`http://localhost:3002/reservations/${userId}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  const text = await res.text();
  console.log(`STATUS: ${res.status}`);
  console.log(`BODY: ${text}`);
}
run();
