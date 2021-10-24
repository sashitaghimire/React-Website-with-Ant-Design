import "./App.css";
import "antd/dist/antd.css";
import AppHeader from "./components/common/AppHeader";
import { Layout } from "antd";
import { Content, Footer } from "antd/lib/layout/layout";
import Home from "./components/views/Home";
import AppFooter from "./components/common/AppFooter";
const { Header } = Layout;
function App() {
  return (
    <Layout className="mainLayout">
      <Header>
        <AppHeader />
      </Header>
      <Content>
        <Home />
      </Content>
      <Footer>
        <AppFooter />
      </Footer>
    </Layout>
  );
}

export default App;
