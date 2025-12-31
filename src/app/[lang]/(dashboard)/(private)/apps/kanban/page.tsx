// Third-party Imports
import classnames from 'classnames'

// Component Imports
import KanbanBoard from '@views/apps/kanban/KanbanBoard'

// Util Imports
import { commonLayoutClasses } from '@layouts/utils/layoutClasses'

// Styles Imports
import styles from '@views/apps/kanban/styles.module.css'

const KanbanPage = () => {
  return (
    <div
      className={classnames(
        commonLayoutClasses.contentHeightFixed,
        styles.scroll,
        'is-full overflow-auto pis-2 -mis-2'
      )}
    >
      <KanbanBoard />
    </div>
  )
}

export default KanbanPage
