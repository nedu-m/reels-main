import {
  HeaderContainer,
  HeaderWrapper,
  HeaderContent,
  HeaderTitle,
  HeaderSubtitle,
} from "@components/MoviePage/Header";

export default function SearchHeader() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle>Welcome.</HeaderTitle>
        <HeaderSubtitle>
          Here you can find the latest movies from the world of cinema.
        </HeaderSubtitle>
      </HeaderContent>
    </HeaderContainer>
  );
}
