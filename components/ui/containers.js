// import { cn } from '@/utils/shadcn';

// export const Container = ({ className, children }) => {
//   return (
//     <div
//       className={cn(
//         'container w-full px-2 mx-auto md:px-8 lg:px-20 xl:px-40',
//         className,
//       )}
//     >
//       {children}
//     </div>
//   );
// };







import PropTypes from 'prop-types';
import { cn } from '@/lib/utils';

export const Container = ({ className, children }) => {
  return (
    <div
      className={cn(
        'container w-full px-2 mx-auto md:px-8 lg:px-20 xl:px-40',
        className,
      )}
    >
      {children}
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Container.defaultProps = {
  className: '',
};
