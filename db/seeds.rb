  # This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Post.destroy_all
Comment.destroy_all
p = Post.create([
  {title: 'web development', slug: 'web-development', content: '<p>Aliquam condimentum porta dui, at ullamcorper nibh malesuada nec. Nam ornare egestas odio, vitae luctus orci porta sed. Curabitur luctus, metus sed ornare faucibus, velit tellus scelerisque lacus, a tempor risus augue sed lectus.</p><p>Morbi placerat vehicula lectus in pretium. Curabitur orci dui, imperdiet vitae vulputate eget, dapibus sed tortor. Phasellus facilisis fringilla sem nec euismod. Vestibulum eleifend libero non neque imperdiet blandit. Donec adipiscing at ante sed sollicitudin. Etiam elementum ante et placerat posuere.</p>'},
  {title: 'web design', slug: 'web-design', content: '<p>Morbi placerat vehicula lectus in pretium. Curabitur orci dui, imperdiet vitae vulputate eget, dapibus sed tortor. Phasellus facilisis fringilla sem nec euismod. Vestibulum eleifend libero non neque imperdiet blandit. Donec adipiscing at ante sed sollicitudin. Etiam elementum ante et placerat posuere. Nullam eget orci sed turpis dictum condimentum ut eget neque. Integer adipiscing ante quis eros tincidunt, sed scelerisque odio dictum.</p>'},
  {title: 'photography', slug: 'photography', content: '<p>no content</p>'},
  {title: 'coffee drinking', slug: 'coffee-drinking', content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In accumsan interdum quam vitae suscipit. </p>'}
])


c2 = Comment.create(twaddle: 'Web development - what is that?')
c1 = Comment.create(twaddle: 'Not sure!')
c3 = Comment.create(twaddle: 'Wed design - Need lots of help with that')

p[0].comments << c1 << c2
p[1].comments << c3

