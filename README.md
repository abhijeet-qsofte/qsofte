# Project Name

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## Description

A brief description of your project.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

Instructions on how to install and run your project.

## Usage

Instructions on how to use your project and any relevant examples.

## Contributing

Guidelines on how to contribute to your project and how others can get involved.

## License

This project is licensed under the [MIT License](LICENSE).

## Contact

If you have any questions or feedback, feel free to reach out to me at [email@example.com](mailto:email@example.com).

## Make a dockerfile

## React app failes due to openssl issue - Fix is to update with Open SSL setting

## Execute : docker build -t qsofte .

## Tag your docker byuild

docker images prune all your docker images if you run into space issues
ensure you build with the right platform during docker compose

##

Use pm2 serve -l build 8443 --spa to server the build and keep it running

# Dockerise NodeJs ( React App)

1. Create the appropriate docker file

Run the following command

docker build --platform="linux/amd64" -t qsofte:v0.10 .

This command is used to build a Docker image from a Dockerfile. Here's what each part of the command does:

- `docker build`: This is the command to build a Docker image.

- `--platform="linux/amd64"`: This option specifies the platform the Docker image is built for. In this case, it's built for Linux systems with AMD64 architecture.

- `-t qsofte:v0.10`: This option is used to tag the Docker image with a name and a version. In this case, the name of the image is `qsofte` and the version is `v0.10`.

- `.`: This specifies the build context, which is the location of the Dockerfile and any files that are being copied into the Docker image. In this case, it's the current directory.

So, this command builds a Docker image for Linux systems with AMD64 architecture, tags it with the name `qsofte` and the version `v0.10`, and uses the current directory as the build context.
