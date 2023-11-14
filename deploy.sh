echo "Building app..."
npm run build

echo "Deploy files to server..."
scp -r -i ~/amazoo dist/* root@159.223.92.177:/var/www/html/
echo "Done!"