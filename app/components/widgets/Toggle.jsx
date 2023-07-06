import { Switch } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Toggle({ title, icons, current }) {

  return (
    <Switch
      title={title}
      checked={current.state}
      onChange={current.set}
      className={classNames('text-base-900 hover:text-primary-600 bg-base-100 relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-primary-600 focus:ring-offset-1'
      )}
    >
      <span className="sr-only">{title}</span>
      <span
        className={classNames(
          current.state ? 'translate-x-5' : 'translate-x-0',
          'pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
        )}
      >
        <span
          className={classNames(
            current.state ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
            {icons.off}
        </span>
        <span
          className={classNames(
            current.state ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
            'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity'
          )}
          aria-hidden="true"
        >
            {icons.on}
        </span>
      </span>
    </Switch>
  )
}
