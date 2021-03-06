import { cx, getHostname } from '@/lib/utils';

type ExternalLinkProps = {
  href: string;
  hostname?: boolean;
};

const ExternalLink: React.FC<ExternalLinkProps> = ({
  href,
  children,
  hostname = true,
}) => {
  return (
    <div className="flex-1">
      <p>
        <a
          className="underline hover:no-underline focus:no-underline"
          target="_blank"
          rel="noopener noreferrer"
          href={href}
        >
          {children}
        </a>
        &nbsp;
        <span
          role="img"
          aria-hidden="true"
          className={cx('flex-shrink-0', 'text-gray-600', 'dark:text-gray-300')}
        >
          ↗
        </span>
      </p>
      {hostname ? (
        <p
          className={cx(
            'mt-0.5 text-sm',
            'text-gray-600',
            'dark:text-gray-300',
          )}
        >
          {getHostname(href)}
        </p>
      ) : null}
    </div>
  );
};

export default ExternalLink;
