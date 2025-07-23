import Image from "next/image";

export default function GeneralInfo() {
  return (
    <div
      className="flex flex-col items-center justify-center p-10"
      style={{
        backgroundColor: "#091700",
        height: "auto",
        width: "100%",
      }}
    >
      <h2 className="text-3xl font-bold mb-4">How It Works</h2>
      <ol className="list-decimal list-inside">
        <li className="mb-2">
          <strong>Step 1:</strong> Enter the URL of the game you want to track.
        </li>
        <li className="mb-2">
          <strong>Step 2:</strong> Provide your email address to receive
          notifications.
        </li>
        <li className="mb-2">
          <strong>Step 3:</strong> We'll monitor the game's price and notify you
          of any price drops.
        </li>
        <li className="mb-2">
          <strong>Step 4:</strong> Get the best deals delivered straight to your
          inbox.
        </li>
      </ol>
      <br />
      <h2 className="text-3xl font-bold mb-4">Important</h2>
      <ol className="list-decimal list-inside">
        <li className="mb-2">
          Currently, we only support Steam games, this might be updated later
          on.
        </li>
        <li className="mb-2">
          Please ensure the URL is correct to receive accurate notifications.
        </li>
        <li className="mb-2">
          We respect your privacy and will not share your email with third
          parties.
        </li>
        <li className="mb-2">
          This is a free service, but we may introduce premium features in the
          future.
        </li>
      </ol>
    </div>
  );
}
