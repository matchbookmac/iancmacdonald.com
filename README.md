#<a href="http://iancmacdonald.com" target="#">iancmacdonald.com</a>

This is my personal website. At the moment it is mostly used for experimenting with git remotes, jQuery, and other website-y stuff.

##Website Updates

Currently the site is hosted on an Amazon EC2 instance. Any changes to the content are to be made on a local clone, then pushed to the EC2 instance, which will then push those changes live, as well as to the Github repo. Something like this:

```console
                                _____________
                                | LIVE SITE | [Live]
                                -------------
                                      ^
                                      |
                                      |
    _________________           ______________
    | Github public |           | EC2 Pushes |
    | repo          | <-------- | to Live    | [Hub]
    -----------------           | and Github |
                                --------------
                                      ^
                                      |
                                      |
                                ______________
                                | Local Repo |
                                | pushes to  | [Local]
                                | EC2        |
                                --------------
```

Although HEAD and master should always be in the same place for Live, Hub, and Github. For simplicity, clones, and pulls should only be made from the Hub (ssh required). Having a remote to Github would short-circuit the whole process.

While it is easier to think of Hub pushing to Live, it is actually a post-update hook in Hub that automates Live pulling from Hub, that way a push is never done to the production code. After Live is updated, Hub then pushes to Github in the same hook.


### License ###
Copyright  (C)  2015  Ian C. MacDonald

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
