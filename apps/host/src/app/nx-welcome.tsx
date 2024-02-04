/*
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 This is a starter component and can be deleted.
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 Delete this file and get started with your project!
 * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 */
export function NxWelcome({ title }: { title: string }) {
  return (
    <div className="wrapper">
      <div className="container">
        <div id="welcome">
          <h1 className="text-3xl font-bold underline bg-red-500">
            Hello world!
          </h1>
          <span> Hello there, </span>
          Welcome {title} 👋
        </div>
      </div>
    </div>
  );
}

export default NxWelcome;
