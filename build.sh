rm -rd out/
cp -r src out
cp -r db out
cp -r assets out
cp assets/package.json out
#(cd out && npm install && npm install sqlite3 --build-from-source --runtime=electron --target=19.0.9 --dist-url=https://electronjs.org/headers && npm exec electron-builder)
#(cd out && npm install && npm run postinstall && npm exec electron-builder)
(cd out && npm install && npm exec electron-builder)
