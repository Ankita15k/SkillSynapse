export default function Profile() {
  return (
    <div className="p-4">
      <h1 className="text-lg font-semibold mb-4">Profile</h1>

      <div className="bg-white rounded-xl shadow-sm p-4 space-y-2">
        <p className="text-sm">
          <strong>Name:</strong> Karan
        </p>
        <p className="text-sm">
          <strong>Email:</strong> karan@email.com
        </p>
        <p className="text-sm">
          <strong>Current Level:</strong> Intermediate
        </p>
      </div>
    </div>
  );
}
