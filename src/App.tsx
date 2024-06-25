import "./App.css";
import styled from "styled-components";
import {FlexBoxCol, FlexBoxRow} from "./components/styled/styled";
import {useTonConnect} from "./hooks/useTonConnect";
import "@twa-dev/sdk";
import {TreeShake} from "./components/tree/TreeShake";

const StyledApp = styled.div`
  background-color: #e8e8e8;
  color: black;

  @media (prefers-color-scheme: dark) {
    background-color: #222;
    color: white;
  }
  min-height: 100vh;
  padding: 20px 20px;
`;

const AppContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

function App() {
  // const { network } = useTonConnect();

  return (
      <div className={"w-full place-content-center"}>
        <div className={"flex items-center justify-center"}>
            <TreeShake/>
        </div>
      </div>

    // <StyledApp>
    //   <AppContainer>
    //     <FlexBoxCol>
    //       <FlexBoxRow>
    //       </FlexBoxRow>
    //       <FlexBoxRow>
    //         qwe
    //         {/*<TonConnectButton />*/}
    //         {/*<Button>*/}
    //         {/*  {network*/}
    //         {/*    ? network === CHAIN.MAINNET*/}
    //         {/*      ? "mainnet"*/}
    //         {/*      : "testnet"*/}
    //         {/*    : "N/A"}*/}
    //         {/*</Button>*/}
    //       </FlexBoxRow>
    //
    //       {/*<Counter />*/}
    //       {/*<TransferTon />*/}
    //       {/*<Jetton />*/}
    //     </FlexBoxCol>
    //
    //   </AppContainer>
    // </StyledApp>
  );
}

export default App;
