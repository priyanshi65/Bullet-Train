class Team < ApplicationRecord
  include Teams::Base
  include Webhooks::Outgoing::TeamSupport
  # 🚅 add concerns above.
  belongs_to :page
  # 🚅 add belongs_to associations above.

  has_many :projects, dependent: :destroy
  has_many :projects_tags, class_name: "Projects::Tag", dependent: :destroy, enable_updates: true
  has_many :entries, dependent: :destroy
  has_many :sites, enable_updates: true
  # 🚅 add has_many associations above.

  # 🚅 add oauth providers above.

  # 🚅 add has_one associations above.

  # 🚅 add scopes above.

  # 🚅 add validations above.

  # 🚅 add callbacks above.

  # 🚅 add delegations above.

  # 🚅 add methods above.
end
