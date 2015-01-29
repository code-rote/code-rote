# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Add additional assets to the asset load path
# Rails.application.config.assets.paths << Emoji.images_path

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )



Rails.application.config.assets.precompile += %w(bootstrap-material-design/dist/css/material-wfont.min.css)
Rails.application.config.assets.precompile += %w(bootstrap-material-design/dist/css/ripples.min.css)

Rails.application.config.assets.precompile += %w( assets/stylesheets/material-design-custom.less )
Rails.application.config.assets.precompile += %w(bootstrap-material-design/dist/js/material.min.js)
Rails.application.config.assets.precompile += %w(bootstrap-material-design/dist/js/ripples.min.js)

# prism.js files
Rails.application.config.assets.precompile += %w( prism/components/prism-javascript.min.js )
Rails.application.config.assets.precompile += %w( prism/prism.js )

# keypress js
# Rails.application.config.assets.precompile += %w( Keypress/keypress.js )