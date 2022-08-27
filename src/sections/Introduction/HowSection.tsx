import Typo, { Highlight } from '../../components/Typo';
import Section from '../../components/Section';
import mediaQuery from '../../styles/mediaQuery';
import styled from 'styled-components';
import Image from 'next/image';


const HowLayout = styled.span`
  ${mediaQuery.large} {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    justify-content: center;
  }

  & > * {
    flex: 1 1 0;
  }
`;

const HowHeadline = styled.h3`
  margin-bottom: 24px;

  ${mediaQuery.large} {
    span {
      font-size: 20px;
      line-height: 30px;
    }
  }
`;
const HowImage = styled.div`
  div {
    position: relative;
    width: 439px;
    height: 280px;
    margin: 0 auto;
  }
  margin-bottom: 80px;

  ${mediaQuery.large} {
    div {
      margin: 0;
      left: 3%;
    }
    margin-bottom: 0;
  }
`;

const HowText = styled.div`
  text-align: center;
  margin-bottom: 40px;
  white-space: pre-wrap;

  ${mediaQuery.large} {
    margin-bottom: 0;
  }
`;

const HowSection = () => {
  return (
    <Section bgColor="bg2" paddingT={40} paddingB={40}>
      <HowLayout>
        <HowImage>
          <div>
            <Image src="/images/what-mathking-does.png" alt="수학대왕이 하는 일" layout="fill"/>
          </div>
        </HowImage>
        <HowText>
            <HowHeadline>
              <Typo type="textMB">
                {'시간을 얼마나 쓰는지 보다 중요한 건,\n'}
                {'시간을 '}<Highlight>어떻게</Highlight>{' 쓰느냐입니다.'}
              </Typo>
            </HowHeadline>
            <Typo type="textMR">
              {'수천만건의 데이터는 자녀분의 시간을 더욱\n'}
              {'효율적으로 사용할 수 있도록 만들어줍니다.'}
            </Typo>
        </HowText>
      </HowLayout>
    </Section>
  );
};

export default HowSection;
