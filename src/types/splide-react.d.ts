
declare module '@splidejs/react-splide' {
    import Splide from '@splidejs/splide';
  
    export interface SplideProps {
      options?: Splide.Options;
      children: React.ReactNode;
    }
  
    const ReactSplide: React.FC<SplideProps>;
  
    export default ReactSplide;
  }
  