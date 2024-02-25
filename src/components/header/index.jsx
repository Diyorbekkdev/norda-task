import {
  Search,
  Notification,
  Fade,
  Switcher as SwitcherIcon,
} from "@carbon/icons-react";
import {
  Header,
  HeaderGlobalAction,
  HeaderGlobalBar,
  HeaderMenu,
  HeaderMenuButton,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  HeaderSideNavItems,
  SideNav,
  SideNavItems,
  SideNavLink,
  SideNavMenu,
  SideNavMenuItem,
  SkipToContent,
  // Search,
} from "carbon-components-react";
import { useState } from "react";

export const MainHeader = () => {
  const [isSideNavExpanded, setIsSideNavExpanded] = useState(false);

  const toggleSideNav = () => {
    setIsSideNavExpanded(!isSideNavExpanded);
  };
  return (
    <Header aria-label="IBM Platform Name">
      <SkipToContent />
      <HeaderMenuButton
        aria-label={isSideNavExpanded ? "Close menu" : "Open menu"}
        onClick={toggleSideNav}
        isActive={isSideNavExpanded}
        aria-expanded={isSideNavExpanded}
      />
      <HeaderName href="#" prefix="IBM">
        [Platform]
      </HeaderName>
      <HeaderNavigation aria-label="IBM [Platform]">
        <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
        <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
        <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
        <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
          <HeaderMenuItem href="#one">Sub-link 1</HeaderMenuItem>
          <HeaderMenuItem href="#two">Sub-link 2</HeaderMenuItem>
          <HeaderMenuItem href="#three">Sub-link 3</HeaderMenuItem>
        </HeaderMenu>
      </HeaderNavigation>
      <HeaderGlobalBar>
        <HeaderGlobalAction
          aria-label="Search"
          onClick={() => console.log("Notifications")}
        >
          <Search size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="Notifications"
          onClick={() => console.log("Notifications")}
        >
          <Notification size={20} />
        </HeaderGlobalAction>
        <HeaderGlobalAction
          aria-label="App Switcher"
          onClick={() => console.log("Notifications")}
          tooltipAlignment="end"
        >
          <SwitcherIcon size={20} />
        </HeaderGlobalAction>
      </HeaderGlobalBar>
      <SideNav
        aria-label="Side navigation"
        expanded={isSideNavExpanded}
        onSideNavBlur={isSideNavExpanded}
        href="#main-content"
      >
        <SideNavItems>
          <HeaderSideNavItems hasDivider={true}>
            <HeaderMenuItem href="#">Link 1</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 2</HeaderMenuItem>
            <HeaderMenuItem href="#">Link 3</HeaderMenuItem>
            <HeaderMenu aria-label="Link 4" menuLinkName="Link 4">
              <HeaderMenuItem href="#">Sub-link 1</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 2</HeaderMenuItem>
              <HeaderMenuItem href="#">Sub-link 3</HeaderMenuItem>
            </HeaderMenu>
          </HeaderSideNavItems>
          <SideNavMenu renderIcon={Fade} title="Category title">
            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
              Link 5
            </SideNavMenuItem>
            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
              Link 6
            </SideNavMenuItem>
            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
              Link 7
            </SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu renderIcon={Fade} title="Category title">
            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
              Link 8
            </SideNavMenuItem>
            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
              Link 9
            </SideNavMenuItem>
            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
              Link 10
            </SideNavMenuItem>
          </SideNavMenu>
          <SideNavMenu renderIcon={Fade} title="Category title" isActive={true}>
            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
              Link 11
            </SideNavMenuItem>
            <SideNavMenuItem
              aria-current="page"
              href="https://www.carbondesignsystem.com/"
            >
              Link 12
            </SideNavMenuItem>
            <SideNavMenuItem href="https://www.carbondesignsystem.com/">
              Link 13
            </SideNavMenuItem>
          </SideNavMenu>
          <SideNavLink
            renderIcon={Fade}
            href="https://www.carbondesignsystem.com/"
          >
            Link
          </SideNavLink>
          <SideNavLink
            renderIcon={Fade}
            href="https://www.carbondesignsystem.com/"
          >
            Link
          </SideNavLink>
        </SideNavItems>
      </SideNav>
      <SkipToContent />
    </Header>
  );
};
