import { auth } from "@/auth";
import Dashboard from "@/components/dashboard";
import SignIn from "@/components/sign-in";

async function App() {
  const session = await auth();
  if (session) {
    return <Dashboard />;
  } else {
    return (
      <>
        <SignIn />
      </>
    );
  }
}

export default App;
