# Generic Comment Thread

## Overview

A very basic `react` + `redux` app, bootstrapped with `create-react-app`.

### Some Shortcuts Taken

Due to time limit, quite a few corners were cut :)

- Lack of `propTypes` on all components
  - During rapid prototyping, I find myself re-organizing component structure, renaming variables quite a lot, having to put correct `propTypes` (and `defaultProps`) in place gets a bit distracting
- CSS modules (or css-in-js type solution)
  - Entire app is styled by a single global `index.css`, which is the default setup from `create-react-app`
  - This app does not include many components, and I did not want to spent a lot of time tweaking `webpack` configuration to wire up css modules
- Testing (**UPDATE** added one unit test and test setup with jest and enzyme)
  - Unfortunately did not have enough time within three hours to add unit tests (will add some though)
- Handling deep nesting (**UPDATE** Implemented this now)
  - No special logic / system was setup to deal with deeply nested threads
  - I had an idea for an implementation similar to reddit, that is if a chain of comments gets too deep, instead of rendering the branches in the tree, simply put a "permlink" for the rest of the thread starting at current comment
    - To accomplish this, I would setup `react-router` and pass down `threadId` (either comment or top level post) through route params
    - Compared to the current state, top-level is is stored on `rootReducer` as a constant
    - Of course, with this approach, it's also necessary to implement 404 routes for non-existent ids
- Optimization
  - Added `reselect` but did not got a chance to use it
  - Did not do any `shouldComponentUpdate`
### That Said... Other things might be interesting

**Seperating UI States and Domain Entities**

My reducer is composed of two main keys: `ui` and `entities`.



 `entities` stores a normalized version of all posts (just one) and comments (staring from 0). In real-world apps, it's usually preferred to split entities into seperate sub-trees by "kind" or "type". I did not do this, to simplify `connect` logic. `entities` are kept "clean" and free of presentational states, ready to be send / retrieved from server-side.



`ui` is modeld as a tagged union type, something can be roughly expressed as:

```
Data UIState = Idle | AddingComment { parentId:: String, body:: String, user:: String }
```

 The ideas behind this particular approach are two-folds:

* Many UI states can be naturally modeled as a state-machine
* If this is a typed language, following the guideline of "making illegal state unrepresentable"
  * app starts as `Idle`
  * `AddingComment` variant is activates when user clicked "reply" button, and starts typing
  * When user clicks Submit or cancel, transition the state back to `Idle` (I did not implement cancel UI, but should be easy enough to do so)




On top of that, the `ui` reducer is also structured to take advantage of the data representation. When ui state is `Idle`, reducer only handles `ADD_COMMENT` type action (triggered by clicking "reply" button). Even if for some reason, an `UPDATE_COMMENT` or `EDIT_COMMENT`  or `SUBMIT_COMMENT` action gets dispatched, the reducer will simply ignore it. Similarly, when a new comment is being edited (`AddingComment`), no `ADD_COMENT` action type is accepted.



I find this approach easier to reason about, as there's good guarantee that only one state is active at a time. In addition, this model can easily be extended with additional states / variants, for instances, `SubmitingCommentToServer`. 


