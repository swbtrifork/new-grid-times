import React from "react";
import { Menu, Search, User } from "react-feather";
import styled from "styled-components/macro";
import { QUERIES } from "../../constants";
import Button from "../Button";
import Logo from "../Logo";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <DetktopActionGroup>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </DetktopActionGroup>
        <Logo />
        <SubscriptionWrapper>
          <Button>SUBSCRIBE</Button>
          <SubLink href="/">Already a subscriber?</SubLink>
        </SubscriptionWrapper>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  padding: 0;
  svg {
    display: block;
  }
`;

const DetktopActionGroup = styled(ActionGroup)`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: flex;
  }
`;

const SubscriptionWrapper = styled.div`
  display: none;
  @media ${QUERIES.laptopAndUp} {
    display: revert;
    position: relative;
    justify-self: end;
  }
`;

const SubLink = styled.a`
  position: absolute;
  width: 100%;
  margin-top: 8px;
  text-align: center;
  font-size: 0.875rem;
  color: var(--color-gray-900);
  font-style: italic;
  text-decoration: underline;
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }

  @media ${QUERIES.laptopAndUp} {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
    justify-content: revert;
    justify-items: start;
  }
`;

export default Header;
