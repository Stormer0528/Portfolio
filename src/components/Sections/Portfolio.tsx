/* eslint-disable react-memo/require-usememo */
import {ArrowTopRightOnSquareIcon} from '@heroicons/react/24/outline';
import {ConfigProvider, Divider, Modal} from 'antd';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <h2 className="self-center text-xl font-bold text-white">Check out some of my work</h2>
        <div className=" w-full columns-2 md:columns-3 lg:columns-3">
          {portfolioItems.map((item, index) => {
            const {title, image} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'relative h-max w-full overflow-hidden shadow-lg shadow-black/30 lg:shadow-xl',
                  )}>
                  <Image alt={title} className="w-full" placeholder="blur" src={image} style={{height: '220px'}} />
                  <ItemOverlay item={item} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, work, skills, title, description, image}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
      !isOpen && setIsOpen(true);
      // url && window.open(url);
    },
    [mobile, showOverlay, isOpen],
  );

  const openUrl = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      event.preventDefault();
      url && window.open(url);
    },
    [url],
  );

  const handleClick = () => setIsOpen(false);

  return (
    <ConfigProvider theme={{
      components: {
        Modal: {
          borderRadiusLG: 0,
          paddingContentHorizontalLG: 0,
          paddingMD: 0,
        },
      },
    }}>
      <div
        className={classNames(
          'absolute inset-0 h-full w-full cursor-pointer  bg-gray-900 transition-all duration-300',
          {'opacity-0 hover:opacity-80': !mobile},
          showOverlay ? 'opacity-80' : 'opacity-0',
        )}
        onClick={handleItemClick}>
        <div className="relative h-full w-full p-4">
          <div className="flex h-full w-full flex-col justify-center gap-y-2 overflow-y-auto overscroll-contain">
            <h2 className="flex justify-center text-center font-bold text-white opacity-100">{title}</h2>
            <p className="text-center text-xs text-white opacity-100 sm:text-sm">{description}</p>
          </div>
          <ArrowTopRightOnSquareIcon className="absolute bottom-1 right-1 h-4 w-4 shrink-0 text-white sm:bottom-2 sm:right-2" />
        </div>
      </div>
      <Modal closable={false} footer={null} onCancel={handleClick} open={isOpen} style={{top: 20}} width={800}>
        <Image alt="background" className="w-full" src={image} style={{height: '450px'}} />
          <div style={{padding: '20px'}}>
            <a onClick={openUrl} style={{float: 'right', color: '#0099ff'}}>{url}</a>
            <Divider orientation="left">{title}</Divider>
            <p>{description}</p>
            <Divider orientation="left">Skills</Divider>
            <strong>{skills}</strong>
            <Divider orientation="left">Work</Divider>
            <p>{work}</p>
          </div>
      </Modal>
    </ConfigProvider>
  );
});
